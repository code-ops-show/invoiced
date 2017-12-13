# frozen_string_literal: true

json.data do
  json.organization do
    json.partial! 'v1/organizations/organization', organization: organization
    json.contacts do
      json.array! organization.contacts do |contact|
        json.partial! 'v1/contacts/contact', contact: contact
      end
    end
  end
end
