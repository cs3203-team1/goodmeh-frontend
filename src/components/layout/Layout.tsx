import {
  ActionIcon,
  Anchor,
  AppShell,
  MantineColorScheme,
  Space,
  useMantineColorScheme,
} from "@mantine/core";
import { IconBrightnessHalf, IconMoon, IconSun } from "@tabler/icons-react";
import { Link, matchPath, Outlet, useLocation } from "react-router-dom";

import logo from "@/assets/logo/GoodMehLogo.png";
import { ViewModeControl } from "@/features/Home/components/ViewModeControl";

import classes from "./Layout.module.scss";

const NavLink: React.FC<{ path: string; label: string }> = ({
  path,
  label,
}) => {
  const { pathname } = useLocation();
  return (
    <Anchor
      component={Link}
      to={path}
      underline={matchPath(path, pathname) ? "always" : "hover"}
    >
      <b>{label}</b>
    </Anchor>
  );
};

const NavBar: React.FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const toggleColorScheme = () => {
    const schemes: MantineColorScheme[] = ["light", "dark", "auto"];
    const currentIndex = schemes.indexOf(colorScheme);
    const next = schemes[(currentIndex + 1) % schemes.length];
    setColorScheme(next);
  };
  return (
    <AppShell.Header className={classes.Layout__AppBar}>
      <Link to="/">
        <img src={logo} alt="GoodMeh Logo" height={50} />
      </Link>
      <Space w="md" />

      <NavLink path="/discover" label="Discover" />
      <Space w="md" />
      <NavLink path="/compare" label="Compare" />
      <Space w="md" />
      <NavLink path="/dashboard" label="Dashboard" />
      <Space flex={1} />

      <ViewModeControl />
      <Space w="md" />
      <ActionIcon onClick={toggleColorScheme}>
        {colorScheme == "light" ? (
          <IconSun />
        ) : colorScheme == "dark" ? (
          <IconMoon />
        ) : (
          <IconBrightnessHalf />
        )}
      </ActionIcon>
    </AppShell.Header>
  );
};

export const Layout: React.FC = () => {
  return (
    <AppShell header={{ height: 60 }} padding="xl">
      <NavBar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
