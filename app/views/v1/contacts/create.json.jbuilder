json.data do
  json.user do
    json.partial! 'v1/contacts/contact', contact: @contact
  end
end
