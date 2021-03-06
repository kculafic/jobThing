'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('job_applications', (table) => {
    table.increments();
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.integer('company_id').notNullable().references('companies.id').onDelete('CASCADE');
    table.string('position_title').notNullable();
    table.string('location').notNullable();
    table.string('url');
    table.boolean('interview');
    table.text('notes');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('job_applications');
};
