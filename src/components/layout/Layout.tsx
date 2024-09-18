import logo from "@/assets/logo/GoodMehLogo.png";
import { useViewMode } from "@/hooks/useViewMode";
import {
  ActionIcon,
  Anchor,
  AppShell,
  Button,
  MantineColorScheme,
  Space,
  useMantineColorScheme,
} from "@mantine/core";
import { IconBrightnessHalf, IconMoon, IconSun } from "@tabler/icons-react";
import { capitalize } from "es-toolkit";
import { Link, matchPath, Outlet, useLocation } from "react-router-dom";
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
  const { mode, toggleMode } = useViewMode();
  return (
    <AppShell.Header className={classes.Layout__AppBar}>
      <Link to="/">
        <img src={logo} alt="GoodMeh Logo" height={50} />
      </Link>
      <Space w="md" />

      <NavLink path="/consumer" label="Consumer" />
      <Space w="md" />
      <NavLink path="/business" label="Business" />

      <Space flex={1} />

      <Button onClick={toggleMode}>{capitalize(mode)}</Button>
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
