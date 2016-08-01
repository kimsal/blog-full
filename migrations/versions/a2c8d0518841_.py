"""empty message

Revision ID: a2c8d0518841
Revises: None
Create Date: 2016-07-20 21:22:59.235510

"""

# revision identifiers, used by Alembic.
revision = 'a2c8d0518841'
down_revision = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('slug', sa.String(length=100), nullable=True),
    sa.Column('is_menu', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('contact',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('firstname', sa.String(length=255), nullable=True),
    sa.Column('lastname', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('email',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('emailgroup',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email_id', sa.Integer(), nullable=True),
    sa.Column('group_id', sa.Integer(), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('group',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('page',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('slug', sa.String(length=255), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.Column('is_menu', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('title')
    )
    op.create_table('partner',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('slug', sa.String(length=255), nullable=True),
    sa.Column('url', sa.String(length=255), nullable=True),
    sa.Column('feature_image', sa.Text(), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_member',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=600), nullable=True),
    sa.Column('password2', sa.String(length=200), nullable=True),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('event',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=500), nullable=True),
    sa.Column('slug', sa.String(length=500), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('feature_image', sa.Text(), nullable=True),
    sa.Column('views', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user_member.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('slug')
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('feature_image', sa.Text(), nullable=True),
    sa.Column('slug', sa.String(length=255), nullable=True),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.Column('views', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user_member.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('slug'),
    sa.UniqueConstraint('title')
    )
    op.create_table('booking',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('phone', sa.String(length=255), nullable=True),
    sa.Column('post_id', sa.Integer(), nullable=True),
    sa.Column('published_at', sa.TIMESTAMP(), server_default=sa.text(u'CURRENT_TIMESTAMP'), nullable=True),
    sa.ForeignKeyConstraint(['post_id'], ['post.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('booking')
    op.drop_table('post')
    op.drop_table('event')
    op.drop_table('user_member')
    op.drop_table('partner')
    op.drop_table('page')
    op.drop_table('group')
    op.drop_table('emailgroup')
    op.drop_table('email')
    op.drop_table('contact')
    op.drop_table('category')
    ### end Alembic commands ###