# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
Engagement.find_or_create_by(name: 'Canned Project')
Engagement.find_or_create_by(name: 'Lean Startup')
