# frozen_string_literal: true

module V1
  # Contact endpoints
  class ContactsController < ApplicationController
    def index
      @contacts = current_account.contacts

      render :index, status: :ok
    end

    def create
      organization = current_acount.organization.friendly.find(params[:organization_id])
      @contact = organization.contacts.build(contact_params)

      @contact.save
      render :create, status: :created
    end

    def destroy
      organization = current_acount.organization.friendly.find(params[:organization_id])
      @contact = organization.contacts.where(id: params[:id]).first
      if @contact.destroy
        head(:ok)
      else
        head(:unprocessable_entity)
      end
    end

    private

    def current_account
      @account ||= Account.friendly.find(params[:account_id])
      @account
    end

    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email)
    end
  end
end
