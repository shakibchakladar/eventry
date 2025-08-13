import { eventModel } from "@/models/even-models";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

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
  const user = userModel.findOne(credintial).lean();
  return user;
}
export { getAllEvents, getEventById, createUser, foundUserByCredintials };
