class AddUserIdToContacts < ActiveRecord::Migration[5.0]
  def change
    add_reference :contacts, :user, index: true, foreign_key: true
  end
end
