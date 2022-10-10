class CreateEngagements < ActiveRecord::Migration[7.0]
  def up
    create_enum :engagement_status, ['UNSTARTED', 'ACTIVE', 'COMPLETE']
    create_table :engagements do |t|
      t.string :name, null: false
      t.enum :status, enum_type: :engagement_status, default: 'UNSTARTED', null: false

      t.timestamps
    end
  end

  def down
    drop_table :engangements

    execute <<-SQL
      DROP TYPE engagement_status;
    SQL
  end
end
