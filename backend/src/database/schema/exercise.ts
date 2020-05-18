import { model, Schema } from 'mongoose';

const ExerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    reps: { type: Number, required: true },
    sets: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const ExerciseModel = model('Exercise', ExerciseSchema);

export { ExerciseModel };
