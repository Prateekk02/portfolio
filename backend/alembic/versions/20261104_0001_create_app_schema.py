"""create the app schema

Revision ID: 0001
Revises:
Create Date: 2026-11-04
"""

from alembic import op

revision = "0001"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute("CREATE SCHEMA IF NOT EXISTS app")


def downgrade() -> None:
    # The schema also holds alembic_version, so it is left in place.
    pass
