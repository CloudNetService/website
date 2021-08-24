import React from "react";
import clsx from "clsx";
import ReactSelect from "react-select";
import styles from "../css/styles.module.css";

type ReleaseTypeName = "snapshot" | "release";

type ReleaseType = {
  name: ReleaseTypeName;
  url: string;
};

type DependencyVersion = {
  version: string;
  groupId: string;
  artifactId: string;
  releaseType: ReleaseTypeName;
};

type Dependency = {
  name: string;
  currentVersion: string;
  versions: DependencyVersion[];
};

const dependencies: Dependency[] = [
  {
    name: "cloudnet-driver",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-driver",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-driver",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-driver",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-driver",
        releaseType: "release",
      },
    ],
  },
  {
    name: "cloudnet-wrapper-jvm",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-wrapper-jvm",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-wrapper-jvm",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-wrapper-jvm",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-wrapper-jvm",
        releaseType: "release",
      },
    ],
  },
  {
    name: "cloudnet-bridge",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-bridge",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-bridge",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-bridge",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-bridge",
        releaseType: "release",
      },
    ],
  },
  {
    name: "cloudnet",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet",
        releaseType: "release",
      },
    ],
  },
  {
    name: "cloudnet-cloudperms",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-cloudperms",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-cloudperms",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-cloudperms",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-cloudperms",
        releaseType: "release",
      },
    ],
  },
  {
    name: "cloudnet-syncproxy",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-syncproxy",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-syncproxy",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-syncproxy",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-syncproxy",
        releaseType: "release",
      },
    ],
  },
  {
    name: "cloudnet-signs",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-signs",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-signs",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-signs",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-signs",
        releaseType: "release",
      },
    ],
  },
  {
    name: "cloudnet-npcs",
    currentVersion: "3.4.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-npcs",
        releaseType: "snapshot",
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-npcs",
        releaseType: "release",
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-npcs",
        releaseType: "snapshot",
      },
      {
        version: "3.4.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-npcs",
        releaseType: "release",
      },
    ],
  },
];
const releaseTypes: ReleaseType[] = [
  {
    name: "release",
    url: "https://repo.cloudnetservice.eu/repository/releases/%groupId%/%artifactId%/%version%/%artifactId%-%version%.jar",
  },
  {
    name: "snapshot",
    url: "https://repo.cloudnetservice.eu/repository/snapshots/%groupId%/%artifactId%/%version%/%artifactId%-%version%.jar",
  },
];

function DependencyDownload() {
  const [dependencyName, setDependencyName] = React.useState(
    dependencies[0].name
  );
  const [versionName, setVersionName] = React.useState(
    dependencies[0].currentVersion
  );

  function getVersions(dependency: Dependency) {
    return dependency.versions.map((version) => {
      return { value: version.version, label: version.version };
    });
  }

  function getDownloadURL(version: DependencyVersion): string {
    const templateURL = releaseTypes.find(
      (releaseType) => releaseType.name === version.releaseType
    ).url;
    if (!templateURL) {
      return "";
    }
    return templateURL
      .replace(/%groupId%/g, version.groupId)
      .replace(/%artifactId%/g, version.artifactId)
      .replace(/%version%/g, version.version);
  }

  const [versions, setVersions] = React.useState(getVersions(dependencies[0]));
  const [downloadURL, setDownloadURL] = React.useState(() => {
    const defaultDependency = dependencies[0];
    const defaultVersion = defaultDependency.versions.find(
      (version) => version.version === defaultDependency.currentVersion
    );
    return getDownloadURL(defaultVersion);
  });
  const versionsRef = React.createRef<any>();

  function updateDownloadURL(dependency: string, version: string) {
    const selectedDependency = dependencies.find(
      (localDependency) => localDependency.name === dependency
    );
    const selectedVersion = selectedDependency.versions.find(
      (localVersion) => localVersion.version === version
    );
    setDownloadURL(getDownloadURL(selectedVersion));
  }

  function handleDependencyChange(newValue) {
    const selectedDependency = dependencies.find(
      (dependency) => dependency.name === newValue.value
    );
    setDependencyName(selectedDependency.name);
    setVersions(getVersions(selectedDependency));
    setVersionName(selectedDependency.currentVersion);
    versionsRef.current.select.setValue(
      {
        value: selectedDependency.currentVersion,
        label: selectedDependency.currentVersion,
      },
      "select-option"
    );
    updateDownloadURL(
      selectedDependency.name,
      selectedDependency.currentVersion
    );
  }

  function handleVersionChange(newValue) {
    setVersionName(newValue.value);
    updateDownloadURL(dependencyName, newValue.value);
  }

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#1d9ce1",
      primary75: "rgba(29,156,225,0.95)",
      primary50: "rgba(29,156,225,0.85)",
      primary25: "rgba(29,156,225,0.75)",
      neutral0: "var(--ifm-dropdown-background-color)",
      neutral5: "var(--ifm-color-emphasis-0)",
      neutral10: "var(--ifm-color-emphasis-100)",
      neutral20: "var(--ifm-color-emphasis-200)",
      neutral30: "var(--ifm-color-emphasis-300)",
      neutral40: "var(--ifm-color-emphasis-400)",
      neutral50: "var(--ifm-color-emphasis-500)",
      neutral60: "var(--ifm-color-emphasis-600)",
      neutral70: "var(--ifm-color-emphasis-700)",
      neutral80: "var(--ifm-color-emphasis-800)",
      neutral90: "var(--ifm-color-emphasis-900)",
    },
  });

  return (
    <div>
      <div>
        <h4>Dependency</h4>
        <ReactSelect
          options={dependencies.map((dependency) => {
            return { value: dependency.name, label: dependency.name };
          })}
          defaultValue={{ value: dependencyName, label: dependencyName }}
          onChange={handleDependencyChange}
          className={clsx(styles.select)}
          theme={customTheme}
        />
      </div>
      <div>
        <h4>Version</h4>
        <ReactSelect
          ref={versionsRef}
          options={versions}
          defaultValue={{ value: versionName, label: versionName }}
          onChange={handleVersionChange}
          className={clsx(styles.select)}
          theme={customTheme}
        />
      </div>
      <div>
        <a
          target="_blank"
          className={clsx(
            "button button--outline button--secondary button--mg",
            styles.downloadButton
          )}
          href={downloadURL}
          id="dependency-download"
          rel="noopener noreferrer"
          key={downloadURL}
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default DependencyDownload;
