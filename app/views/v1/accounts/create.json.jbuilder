json.data do
  json.account do
    json.partial!(
      'v1/accounts/account',
      account: account
    )
  end
end
