const { Model } = require("objection");

class Channel extends Model {
  static get tableName() {
    return "channel";
  }

  static get relationMappings() {
    const Video = require("./video");
    const User = require("./user");

    return {
      video: {
        relation: Model.HasManyRelation,
        modelClass: Video,
        join: {
          from: "channel.id",
          to: "video.channelId",
        },
      },
      user: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: "channel.id",
          to: "user.channelId",
        },
      },
    };
  }
}

module.exports = Channel;
