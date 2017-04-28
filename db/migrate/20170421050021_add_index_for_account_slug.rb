class AddIndexForAccountSlug < ActiveRecord::Migration[5.0]
  def change
    add_index :accounts, :slug, unique: true
  end
end
