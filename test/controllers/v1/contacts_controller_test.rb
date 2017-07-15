# frozen_string_literal: true

require 'test_helper'

module V1
  class ContactsControllerTest < ActionDispatch::IntegrationTest
    test 'should get only contacts for artellectual' do
      account = accounts(:artellectual)

      not_artellectual_contact = contacts(:two)

      get v1_contacts_path(account_id: account.id)

      contacts = JSON.parse(@response.body)['data']
      contact_ids = contacts.map { |contact| contact['id'] }

      assert_response :success
      assert_not_includes contact_ids, not_artellectual_contact.id
    end

    test 'should create contact under the correct org' do
      account = accounts(:artellectual)
      org = account.organizations.first

      first_name = Faker::Name.name
      last_name = Faker::Name.name

      post(
        v1_organization_contacts_path(
          account_id: account.id,
          organization_id: org.id
        ),
        params: {
          contact: { first_name: first_name, last_name: last_name }
        }
      )

      contact = JSON.parse(@response.body)['data']['contact']

      assert_response :created
      assert_equal first_name, contact['first_name']
    end
  end
end
