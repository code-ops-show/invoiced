# frozen_string_literal: true

module V1
  # OrganizationsController
  class OrganizationsController < ApplicationController
    def index
      organizations = current_account.organizations

      render :index, locals: { organizations: organizations }, status: :ok
    end

    def show
      organization = current_account.organizations.find(params[:id])

      render :show, locals: { organization: organization }, status: :ok
    end

    def create
      organization =
        current_account.organizations.build(organization_params)

      if organization.save
        render :create, locals: { organization: organization }, status: :created
      else
        render json: { errors: organization.errors.messages },
               status: :unprocessable_entity
      end
    end

    private

    def organization_params
      params.require(:organization).permit(:name, :address, :tax_payer_number)
    end
  end
end
