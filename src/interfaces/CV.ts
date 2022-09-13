export enum Langs {
  FRANCAIS = "Francais",
  ANGLAIS = "Anglais",
}

export enum BlocksTypes {
  "PersonalInfo",
  "Langs",
  "ProfileDescription",
  "Degree",
  "Job",
  "Skill",
  "Training",
}

export interface Dates {
  dateStart: string;
  dateEnd: string;
}

export interface Profile {
  name: string;
  title: string;
  picture: string;
}

export interface PersonalInfos {
  type?: "email" | "tel" | "link";
  icon: string;
  value: string;
}

export interface PersonalInfosBlock {
  type: BlocksTypes.PersonalInfo;
  infos: PersonalInfos[];
}

export interface LangsBlock {
  type: BlocksTypes.Langs;
  langs: {
    lang: Langs;
    rate: number;
  }[];
}

export interface ProfileDescriptionBlock {
  type: BlocksTypes.ProfileDescription;
  description: string;
}

export interface Degree {
  title: string;
  date: Dates;
  school: string;
  city: string;
}

export interface DegreeBlock {
  type: BlocksTypes.Degree;
  degrees: Degree[];
}

export interface Job {
  title: string;
  date: Dates;
  company: string;
  city: string;
  description: string;
}

export interface JobsBlock {
  type: BlocksTypes.Job;
  jobs: Job[];
}

export interface Skill {
  name: string;
  rate: number;
}

export interface SkillsBlock {
  type: BlocksTypes.Skill;
  skills: Skill[];
}

export interface Training {
  title: string;
  time: number;
  description: string;
  picture: string;
}

export interface TrainingsBlock {
  type: BlocksTypes.Training;
  trainings: Training[];
}

export interface CVBlock {
  page: number;
  block:
    | PersonalInfosBlock
    | LangsBlock
    | ProfileDescriptionBlock
    | DegreeBlock
    | JobsBlock
    | SkillsBlock
    | TrainingsBlock;
}

export interface CVInterface {
  profileInfo: Profile;
  leftSection: CVBlock[];
  content: CVBlock[];
}
