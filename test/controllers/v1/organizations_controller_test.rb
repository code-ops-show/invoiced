# frozen_string_literal: true

require 'test_helper'

module V1
  # OrganizationsControllerTest
  class OrganizationsControllerTest < ActionDispatch::IntegrationTest
    setup do
      user = users(:one)
      @account = accounts(:artellectual)

      @header = {
        'X-User-Email': user.email,
        'X-User-Token': user.authentication_token
      }
    end

    test 'creates account for user' do
      organization_params = {
        name: Faker::Company.name,
        tax_payer_number: Faker::Company.ein,
        address: Faker::Address.street_name
      }

      post(
        v1_organizations_path(@account),
        headers: @header,
        params: { organization: organization_params }
      )

      organization = JSON.parse(@response.body)['data']['organization']

      assert_response :created

      assert organization['name'] == organization_params[:name]
    end
  end
end
