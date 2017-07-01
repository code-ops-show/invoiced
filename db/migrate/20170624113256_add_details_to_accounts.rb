class AddDetailsToAccounts < ActiveRecord::Migration[5.1]
  def change
    add_column :accounts, :address, :text
    add_column :accounts, :vat_rate, :float
    add_column :accounts, :tax_payer_id, :string
    add_column :accounts, :default_currency, :string
  end
end
