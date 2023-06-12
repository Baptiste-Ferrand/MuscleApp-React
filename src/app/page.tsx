'use client'
import styles from "./page.module.css"
import * as React from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WeightCard from "../../components/WeightCard";

const label = { inputProps: { "aria-label": "Switch demo" } };
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Home() {
  return (
      <div className={styles.container}>
          <WeightCard></WeightCard>
      <Card sx={{ minWidth: 275 }}>
          <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Poids de dépard : 60 KG
              </Typography>
          </CardContent>
      </Card>
      </div>
  );
}