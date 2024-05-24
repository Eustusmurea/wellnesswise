// imports
import type { stepType } from '@/types.h';

const steps_list: stepType[] = [
  {
    id: 'BasicInfoCard',
    icon: '',
    title: 'Personal Information',
    description: 'We need some basic informations from you to start',
    component: null,
    answers: {
      name: '',
      age: 22,
      gender: 'M',
      height: 175,
      weight: 70,
      body_type: 'healthy',
      neck: 50,
      waist: 90,
      hip: 60,
      is_fat_accurate: null,
    },
  },
  {
    id: 'FitnessGoal',
    icon: '',
    title: 'Fitness Goal',
    description: 'What do you want to achieve in your new fitness journey',
    component: null,
    answers: {
      fitness_goal: 'burn_fats',
      workout_days: 3,
      activity: '0',
    },
  },
];

export default steps_list;
