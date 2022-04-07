export interface Mission {
  id: number;
  unit: number;
  reference: number;
  target: string;
  category: string;
  title: string;
  description: string;
  image: string;
  impactPoints: number;
  genusCoins: number;
  howTo: string;
  help: string;
  missionContext: string;
  why: string;
  submission: string;
  imageUpload: boolean;
  fileUpload: boolean;
  submissionQuestions: Record<string, any>[];

  urlSlug: string;
}

export interface MissionGroup {
  groupName: string;
  missions: Mission[];
}
