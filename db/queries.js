import { eventModel } from "@/models/even-models";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import mongoose from "mongoose";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}

async function createUser(user) {
  return await userModel.create(user);
}

async function foundUserByCredintials(credintial) {
  const user = await userModel.findOne(credintial).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateInterest(eventId, authId) {
  const event = await eventModel.findById(eventId);
  if (event) {
    const foundUsers = event.interested_ids.find(
      (id) => id.toString() === authId
    );
    if (foundUsers) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }
  }
 await event.save();
}

async function updateGoing(eventId, authId) {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));
 await event.save();
}

export {
  getAllEvents,
  getEventById,
  createUser,
  foundUserByCredintials,
  updateInterest,
  updateGoing,
};
