import { TimeIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Flex,
  Badge,
  Image,
  Card,
  CardBody,
  Center,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Food {
  name: string;
  kcal: number;
  carbohydrate: number;
  protein: number;
  fat: number;
}

interface Meal {
  date: string;
  time: string;
  img: string;
  info: {
    mealTime: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";
    foods: Food[];
  };
}

interface Meals {
  date: string;
  mealData: Meal[];
}

function MealGallery({
  meals,
  onImageClick,
}: {
  meals: Meals;
  onImageClick: (meal: Meal) => void;
}) {
  if (!meals.mealData) {
    return (
      <Card variant="outline">
        <CardBody>
          <Center gap={4} color="gray.400">
            <TimeIcon />
            <Text>기록된 식사가 없습니다</Text>
          </Center>
        </CardBody>
      </Card>
    );
  }

  return (
    <SimpleGrid columns={3}>
      {meals.mealData.map((meal) => {
        let mealTime = null;
        switch (meal.info.mealTime) {
          case "BREAKFAST":
            mealTime = "아침";
            break;
          case "LUNCH":
            mealTime = "점심";
            break;
          case "DINNER":
            mealTime = "저녁";
            break;
          case "SNACK":
            mealTime = "간식";
            break;
        }

        const date = new Date(meal.date);

        return (
          <Flex>
            <Image
              objectFit="cover"
              boxSize="full"
              src={meal.img}
              cursor="pointer"
              fallbackSrc="https://via.placeholder.com/150"
              onClick={() => onImageClick(meal)}
            />
            <Badge position="absolute">
              {date.getDate()}일 {mealTime}
            </Badge>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
}

export default MealGallery;