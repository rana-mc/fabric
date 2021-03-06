type FabricInstaller = {
  url: string;
  maven: string;
  version: string;
  stable: boolean;
};

type FabricLoader = {
  separator: string;
  build: number;
  maven: string;
  version: string;
  stable: boolean;
};

type FabricCore = {
  gameVersion: string;
  loader: FabricLoader;
  installer: FabricInstaller;
  serverInstallerUrl: string;
};

type FabricServerCore = { type: "fabric" } & FabricCore;

type FabricServerData = {
  id: string;
  name: string;
  status: string;
  core: FabricServerCore;
  mods: string[];
  gameVersion: string;
  gameVersionTypeId: number;
  eula: boolean;
  startTimes: [];
};

type FabricLocalDBData = {
  installers: FabricInstaller[];
  loaders: FabricLoader[];
  status: { [coreName: string]: number };
};
