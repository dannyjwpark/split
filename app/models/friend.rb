# == Schema Information
#
# Table name: friends
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string           not null
#
class Friend < ApplicationRecord
    validates_presence_of :user_id

    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"
end
