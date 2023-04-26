import { CheckIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
  HStack,
  Badge,
  AspectRatio,
  VStack,
  LinkBox,
  Circle,
  Icon,
} from "@chakra-ui/react";
import ChatBot from "../components/ChatBot";
import Header from "../components/Header";
import TemplateGrid from "../layouts/TemplateGrid";
import sampleFood from "../assets/sample_food.jpg";
import ArticleHeading from "../components/ArticleHeading";
import { Link as RouterLink } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { BiBowlRice } from "react-icons/bi";
import { TbMeat } from "react-icons/tb";
import { GiJellyBeans } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";

type NutrientCardProps = {
  name: string;
  value: number;
  maxValue: number;
  unit: string;
  bgGradient?: string;
  color?: string;
  icon: IconType;
};

function NutrientCard(props: NutrientCardProps) {
  return (
    <Card w="full" bgGradient={props.bgGradient} color={props.color}>
      <CardBody>
        <Stack spacing={3}>
          <HStack>
            <Icon
              as={props.icon}
              boxSize={5}
              color={props.bgGradient ? "white" : "green.500"}
            />
            <Heading size="sm">{props.name}</Heading>
          </HStack>
          <Text as="span" fontWeight="semibold">
            {props.value}
            <Text as="span" fontWeight="normal">
              {`/${props.maxValue}${props.unit}`}
            </Text>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function Home() {
  const header = <Header>홍길동님</Header>;

  const main = (
    <Stack spacing={4}>
      <ChatBot question="오늘 아침엔 샐러드를 먹었어. 영양학적 측면에서 평가해줘." />
      <ArticleHeading text="2023년 03월 23일" />
      <SimpleGrid w="full" padding={1} columns={2} spacing={4}>
        <NutrientCard
          icon={BsFire}
          name="칼로리"
          value={200}
          maxValue={1500}
          unit="kcal"
          bgGradient={"linear(to-r, green.400, green.500)"}
          color="white"
        />
        <NutrientCard
          icon={BiBowlRice}
          name="탄수화물"
          value={200}
          maxValue={500}
          unit="g"
        />
        <NutrientCard
          icon={GiJellyBeans}
          name="단백질"
          value={200}
          maxValue={500}
          unit="g"
        />
        <NutrientCard
          icon={TbMeat}
          name="지방"
          value={200}
          maxValue={500}
          unit="g"
        />
      </SimpleGrid>
      <Tabs variant="soft-rounded" colorScheme="green" size="sm">
        <TabList>
          <Tab>아침</Tab>
          <Tab>점심</Tab>
          <Tab>저녁</Tab>
        </TabList>
        <TabPanels>
          <TabPanel paddingLeft={0} paddingRight={0}>
            <Card variant="outline">
              <CardBody p={0}>
                <HStack padding={[0, 4]}>
                  <AspectRatio ratio={1} width={["35%", "25%"]}>
                    <Image src={sampleFood} alt="Food" borderRadius={[0, 8]} />
                  </AspectRatio>
                  <Center width="65%">
                    <Stack spacing={[4, 5]}>
                      <HStack>
                        <Badge fontSize={["xs", "sm"]}>#샐러드</Badge>
                      </HStack>
                      <HStack spacing={[6, 14]}>
                        <Stack spacing={[2, 3]}>
                          <Heading size={["sm", "md"]}>섭취 칼로리</Heading>
                          <Text fontSize={["sm", "lg"]}>200kcal</Text>
                        </Stack>
                        <Stack spacing={[2, 3]}>
                          <Heading size={["sm", "md"]}>영양 균형</Heading>
                          <Text
                            fontSize={["sm", "lg"]}
                            color="green.400"
                            fontWeight="semibold"
                          >
                            좋음
                          </Text>
                        </Stack>
                      </HStack>
                    </Stack>
                  </Center>
                </HStack>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel paddingLeft={0} paddingRight={0}>
            <Card variant="outline">
              <CardBody>
                <Center gap={4} color="gray.400">
                  <CheckIcon />
                  <Text>기록된 식사가 없습니다</Text>
                </Center>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel paddingLeft={0} paddingRight={0}>
            <Card variant="outline">
              <CardBody>
                <Center gap={4} color="gray.400">
                  <CheckIcon />
                  <Text>기록된 식사가 없습니다</Text>
                </Center>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );

  const footer = (
    <HStack
      justify="space-around"
      borderTop="1px"
      borderColor="gray.100"
      padding={5}
    >
      <LinkBox as={RouterLink} to="/info">
        <VStack>
          <Icon as={ImHome} />
          <Text fontSize="sm" fontWeight="semibold">
            정보
          </Text>
        </VStack>
      </LinkBox>
      <LinkBox as={RouterLink} to="/photo">
        <Circle size="48px" bg="#ffd4ce">
          <Circle size="32px" bg="#ff9386"></Circle>
        </Circle>
      </LinkBox>
      <LinkBox as={RouterLink} to="/chat">
        <VStack color="gray.300">
          <Icon as={BsFillChatLeftTextFill} />
          <Text fontSize="sm" fontWeight="semibold">
            채팅
          </Text>
        </VStack>
      </LinkBox>
    </HStack>
  );

  return <TemplateGrid header={header} main={main} footer={footer} />;
}
