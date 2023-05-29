import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import ChatBot from "../../components/ChatBot";
import {
  ScannedPicture,
  TargetAchievement,
  NutrientAnalysisTable,
} from "../../components/NutrientAnalysis";

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

function translator(name: string) {
  const names: any = {
    Mandu: "만두",
    KKennip: "깻잎",
    Jabgokbab: "잡곡밥",
    Jeyukbokum: "제육볶음",
    Gimchizzigae: "김치찌개",
    Samgyupsal: "삼겹살",
    Duinjangzzigae: "된장찌개",
    Gamjatang: "감자탕",
    Ramyun: "라면",
    Pizza: "피자",
    Yangnyumchicken: "양념치킨",
    Friedchicken: "후라이드치킨",
    BaechuKimchi: "배추김치",
    Kkakdugi: "깍두기",
    Bulgogi: "불고기",
    Godeungeogui: "고등어구이",
    Zzajangmyun: "짜장면",
    Zzambbong: "짬뽕",
    Friedegg: "계란후라이",
    Gyeranjjim: "계란찜",
  };

  if (names.hasOwnProperty(name)) {
    return names[name];
  } else {
    return name;
  }
}

type MealDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  meal: Meal | null;
};

function MealDrawer({ isOpen, onClose, meal }: MealDrawerProps) {
  // const [kcal, setKcal] = useState<number>(0);
  // const [carbohydrate, setCarbohydrate] = useState<number>(0);
  // const [protein, setProtein] = useState<number>(0);
  // const [fat, setFat] = useState<number>(0);
  // const [targetKcal, setTargetKcal] = useState<number>(0);
  // const [targetCarbohydrate, setTargetCarbohydrate] = useState<number>(0);
  // const [targetProtein, setTargetProtein] = useState<number>(0);
  // const [targetFat, setTargetFat] = useState<number>(0);

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: `${process.env.REACT_APP_NUTT_API_URL}/api/search/today-intake`,
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => {
  //     const { data } = res.data;
  //     console.log(data);
  // const {
  //   dailyKcal,
  //   dailyCarbohydrate,
  //   dailyProtein,
  //   dailyFat,
  //   intakeKcalSum,
  //   intakeFatSum,
  //   intakeCarbohydrateSum,
  //   intakeProteinSum,
  // } = data;
  // setKcal(dailyKcal);
  // setCarbohydrate(dailyCarbohydrate);
  // setProtein(dailyProtein);
  // setFat(dailyFat);
  // setTargetKcal(intakeKcalSum);
  // setTargetCarbohydrate(intakeCarbohydrateSum);
  // setTargetProtein(intakeProteinSum);
  // setTargetFat(intakeFatSum);
  //   });
  // }, []);

  if (!meal) return null;

  const { date, img, info } = meal;
  const [year, month, day] = date.split("-");
  const question = `오늘은 ${info.foods
    .map((food) => translator(food.name))
    .join(", ")}을 먹었어. 영양학적 측면에서 평가해줘.`;

  let mealTime = null;
  switch (info.mealTime) {
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

  return (
    <Drawer
      placement="right"
      onClose={onClose}
      isOpen={isOpen}
      size={["xs", "md"]}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          {year}년 {month}월 {day}일 {mealTime}
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing={6} w="full" paddingTop={4} paddingBottom={4}>
            <ChatBot question={question} />
            <ScannedPicture src={img} />
            {/* <TargetAchievement
              currentKcal={kcal}
              targetKcal={targetKcal}
              currentCarbohydrate={carbohydrate}
              targetCarbohydrate={targetCarbohydrate}
              currentProtein={protein}
              targetProtein={targetProtein}
              currentFat={fat}
              targetFat={targetFat}
            /> */}
            <NutrientAnalysisTable foods={info.foods} />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MealDrawer;
