json.data do
  json.array! accounts do |account|
    json.partial! 'v1/accounts/account', account: account
  end
end
