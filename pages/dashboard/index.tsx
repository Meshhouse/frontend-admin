import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import withLayout from '../../layouts/dashboard';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Dashboard = (): JSX.Element => (
  <>
    <Breadcrumb className="breadcrumbs">
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Главная</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Дашборд</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Heading>Дашборд</Heading>
    <div>
      <Text fontSize="xl">Количество загруженных моделей</Text>
      <StatGroup className="statistics">
        <Stat className="statistics__block">
          <StatLabel>3ds Max</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
        <Stat className="statistics__block">
          <StatLabel>Maya</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
        <Stat className="statistics__block">
          <StatLabel>Cinema4D</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
        <Stat className="statistics__block">
          <StatLabel>Houdini</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
        <Stat className="statistics__block">
          <StatLabel>Unity</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
        <Stat className="statistics__block">
          <StatLabel>Unreal Engine</StatLabel>
          <StatNumber>345,670</StatNumber>
        </Stat>
      </StatGroup>
    </div>
  </>
);

Dashboard.Layout = withLayout;

export default Dashboard;
