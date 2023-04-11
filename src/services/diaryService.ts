import diaries from "../../entries"
import { DiaryEntry, NonSensitiveDiaryEntry } from "../types"

const getEntries = (): DiaryEntry[] => {
  return diaries
}

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id, date, weather, visibility
  }))
}

const addDiary = () => {
  return null
}

const myService = {
  getEntries,
  getNonSensitiveEntries,
  addDiary
}

export default myService