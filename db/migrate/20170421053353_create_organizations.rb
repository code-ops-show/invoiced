class CreateOrganizations < ActiveRecord::Migration[5.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.text :address
      t.string :tax_payer_number
      t.string :slug

      t.timestamps
    end
    add_index :organizations, :slug, unique: true
  end
end
