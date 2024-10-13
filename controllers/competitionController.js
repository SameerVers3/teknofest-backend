import { competitionsCategories, getCompetitionDetails } from '../utils/competitions.js';

export const getCategories = async (req, res) => {
  res.json(competitionsCategories);
};

export const getCompetitionDetail = async (req, res) => {
  const id = req.params.id;
  const data = getCompetitionDetails(id);
  if (!data) {
    res.status(404).json({ message: 'Competition not found' });
  }

  res.json(data);
};

export const getCompetition = async (req, res) => {
  const id = req.params.id;
  const data = getCompetition(id);
  if (!data) {
    res.status(404).json({ message: 'Competition not found' });
  }

  res.json(data);
};