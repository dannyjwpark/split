# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string           not null
#
class User < ApplicationRecord
    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    attr_reader :password 

    has_many :bills_authored,
        foreign_key: :author_id,
        class_name: "Bill"

    has_many :comments,
        foreign_key: :commenter_id,
        class_name: "Comment"
    
    has_many :friends,
        foreign_key: :user_id,
        class_name: "Friend"

    has_many :bills_paid,
        foreign_key: :payer_id,
        class_name: "BillGroup"

    has_many :paid_expenses_details,
        through: :bills_paid,
        source: :bill

    has_many :split_bills,
        foreign_key: :split_id,
        class_name: "BillGroup"
    
    
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    
    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

    def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
