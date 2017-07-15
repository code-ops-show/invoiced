# frozen_string_literal: true

module V1
  # Contact endpoints
  class ContactsController < ApplicationController
    include V1::Contacts::Response

    def index
      @contacts = current_account.contacts

      render :index, status: :ok
    end

    def create
      contact = current_organization.contacts.build(contact_params)

      create_and_render_contact(contact) || render_invalid_response
    end

    def update
      contact = current_organization.contacts.find(params[:id])

      update_and_render_contact(contact, contact_params) ||
        render_invalid_response
    end

    def destroy
      @contact = current_organization.contacts.find(params[:id])

      if @contact.destroy
        head(:ok)
      else
        head(:unprocessable_entity)
      end
    end

    private

    def current_account
      @current_account ||= Account.friendly.find(params[:account_id])
    end

    def current_organization
      @current_organization ||=
        current_account.organizations.find(params[:organization_id])
    end

    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email)
    end
  end
end
