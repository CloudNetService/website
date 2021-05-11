import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function DependencyDownload() {
  function loadVersions() {
    let dependencySelect = document.getElementById("dependency-select")
    let selectedDependencyName = dependencySelect.options[dependencySelect.selectedIndex].value

    let versionSelect = document.getElementById("version-select")
    versionSelect.innerHTML = ""
    let selectedDependency = dependencies.find(dependency => dependency.name === selectedDependencyName)
    {selectedDependency.versions.map(version => {
      let opt = document.createElement('option');
      opt.value = version.version
      opt.innerText = version.version
      versionSelect.appendChild(opt)
    })}
    versionSelect.value = selectedDependency.currentVersion

    updateDownloadURL()
  }

  function getDownloadURL(version) {
    let templateURL = releaseTypes.find(releaseType => releaseType.name === version.releaseType).url
    if (!templateURL) {
      console.error(`ReleaseType ${version.releaseType} of ${version.name}(${version.version}) does not exist!`)
      return ""
    }
    return templateURL.replace(/%groupId%/g, version.groupId).replace(/%artifactId%/g, version.artifactId).replace(/%version%/g, version.version)
  }

  function updateDownloadURL() {
    let dependencySelect = document.getElementById('dependency-select')
    let selectedDependencyName = dependencySelect.options[dependencySelect.selectedIndex].value

    let versionSelect = document.getElementById('version-select')
    let selectedVersionName = versionSelect.options[versionSelect.selectedIndex].value

    let selectedDependency = dependencies.find(dependency => dependency.name === selectedDependencyName)
    let selectedVersion = selectedDependency.versions.find(version => version.version === selectedVersionName);

    let downloadURL = getDownloadURL(selectedVersion)

    let downloadButton = document.getElementById('dependency-download')
    downloadButton.href = downloadURL
  }

  return (
    <div>
      <div className={clsx(styles.selectParent)}>
        <div>
          <h4>Dependency</h4>
          <select id="dependency-select" onChange={loadVersions} className={clsx(styles.select)}>
            {dependencies.map(dependency => {
              return <option key={dependency.name} value={dependency.name}>{dependency.name}</option>
            })}
          </select>
        </div>
        <div>
          <h4>Version</h4>
          <select id="version-select" onChange={updateDownloadURL} className={clsx(styles.select)} defaultValue={dependencies[0].currentVersion}>
            {dependencies[0].versions.map(version => {
              return <option key={version.version} value={version.version}>{version.version}</option>
            })}
          </select>
        </div>
        <div>
          <a target="_blank" className={clsx('button button--outline button--secondary button--mg', styles.downloadButton)}
             href={getDownloadURL(dependencies[0].versions[0])} id="dependency-download">Download</a>
        </div>
      </div>
    </div>
  );
}

export default DependencyDownload;

const dependencies = [
  {
    name: "cloudnet",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet",
        releaseType: "snapshot"
      }
    ]
  },
  {
    name: "cloudnet-driver",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-driver",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-driver",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-driver",
        releaseType: "snapshot"
      }
    ]
  },
  {
    name: "cloudnet-wrapper-jvm",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-wrapper-jvm",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-wrapper-jvm",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-wrapper-jvm",
        releaseType: "snapshot"
      }
    ]
  },
  {
    name: "cloudnet-bridge",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-bridge",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-bridge",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-bridge",
        releaseType: "snapshot"
      }
    ]
  },
  {
    name: "cloudnet-cloudperms",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-cloudperms",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-cloudperms",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-cloudperms",
        releaseType: "snapshot"
      }
    ]
  },
  {
    name: "cloudnet-syncproxy",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-syncproxy",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-syncproxy",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-syncproxy",
        releaseType: "snapshot"
      }
    ]
  },
  {
    name: "cloudnet-signs",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-signs",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-signs",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-signs",
        releaseType: "snapshot"
      }
    ]
  },
  {
    name: "cloudnet-npcs",
    currentVersion: "3.3.0-RELEASE",
    versions: [
      {
        version: "3.3.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-npcs",
        releaseType: "snapshot"
      },
      {
        version: "3.3.0-RELEASE",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-npcs",
        releaseType: "release"
      },
      {
        version: "3.4.0-SNAPSHOT",
        groupId: "de/dytanic/cloudnet",
        artifactId: "cloudnet-npcs",
        releaseType: "snapshot"
      }
    ]
  }
]
const releaseTypes = [
  {
    name: "release",
    url: "https://repo.cloudnetservice.eu/repository/releases/%groupId%/%artifactId%/%version%/%artifactId%-%version%-javadoc.jar"
  },
  {
    name: "snapshot",
    url: "https://repo.cloudnetservice.eu/repository/snapshots/%groupId%/%artifactId%/%version%/%artifactId%-%version%-javadoc.jar"
  }
]