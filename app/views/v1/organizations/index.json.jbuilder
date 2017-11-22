# frozen_string_literal: true

json.data do
  json.array! organizations do |organization|
    json.partial! 'v1/organizations/organization', organization: organization
  end
end
