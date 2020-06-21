var KnexQueryBuilder;
try {
  // this is the path of the query builder in the latest version of knexjs
  KnexQueryBuilder = require('knex/src/query/builder');
} catch(e) {
  // not found, let's revert to the old path of old version of knexjs
  KnexQueryBuilder = require('knex/lib/query/builder');
}

module.exports = function (knex) {
  KnexQueryBuilder.prototype.with_rights = function (user_field, userid, orgfield, orgcode ) {
    //let paginator = {};
    let promises = [];

    //judge userid and orgcode
    //1-userid
    //2-orgcode
    //3-branch
    //4-all
    //
    //promises.push(this.clone().clearSelect().clearOrder().count('* as total').first());

    // This will paginate the data itself
    //promises.push(this.offset(offset).limit(perPage));

    return this.where(user_field, userid);
  }

  knex.queryBuilder = function queryBuilder() {
    return new KnexQueryBuilder(knex.client);
  }
}
