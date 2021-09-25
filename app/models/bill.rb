# == Schema Information
#
# Table name: bills
#
#  id         :bigint           not null, primary key
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Bill < ApplicationRecord
    validates_presence_of :author_id
    
    belongs_to :user,
        foreign_key: :author_id,
        class_name: "User"
    
    has_many :comments,
        foreign_key: :bill_id,
        class_name: "Comment"

end
