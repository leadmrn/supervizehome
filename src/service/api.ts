import axios from 'axios';
import { store } from '../redux/store';
import {
  addArtisan,
  addProject,
  addReport,
  login,
  setProjects,
  setSelectedProject,
  setSelectedReport,
} from '../redux/userSlice';

interface userInfoLogin {
  identifier: string;
  password: string;
}

interface userInfoRegister {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  tel?: string;
  job?: string;
  type: string;
}

interface projectInfo {
  name: string;
  location: string;
  landArea: number;
  houseArea: number;
  start_date: string;
  user_client: number;
}

const api = 'https://fast-citadel-34836.herokuapp.com/api';

export const userService = {
  login: async (userInfo: userInfoLogin) => {
    const url = `${api}/auth/local`;
    await axios
      .post(url, userInfo)
      .then(async (resp) => {
        store.dispatch(login(resp.data));
        const type = resp.data.user.type;
        const req =
          type === 'client'
            ? `${api}/users/${resp.data.user.id}?populate=projects_clients`
            : `${api}/users/${resp.data.user.id}?populate=projects_artisans`;
        await axios
          .get(req, {
            headers: {
              Authorization: `BEARER ${resp.data.jwt}`,
            },
          })
          .then((resp) => {
            if (type === 'client') {
              store.dispatch(setProjects(resp.data.projects_clients));
            } else {
              store.dispatch(setProjects(resp.data.projects_artisans));
            }
          });
      })
      .catch(() => {
        throw new Error('Une erreur est survenue');
      });
  },
  register: async (userInfo: userInfoRegister) => {
    await axios
      .post(`${api}/auth/local/register`, userInfo)
      .then(async (resp) => {
        const role =
          resp.data.user.type === 'client'
            ? 3
            : resp.data.user.type === 'artisan'
            ? 4
            : null;
        await axios
          .put(
            `${api}/users/${resp.data.user.id}`,
            { role: role },
            {
              headers: {
                Authorization: `BEARER ${resp.data.jwt}`,
              },
            }
          )
          .catch(() => {
            throw new Error('Une erreur est survenue');
          });
      })
      .catch(() => {
        throw new Error('Une erreur est survenue');
      });
  },
};

export const projectService = {
  create: async (projectInfo: projectInfo) => {
    const url = `${api}/projects`;
    const token = store.getState().token;
    axios
      .post(
        url,
        {
          data: projectInfo,
        },
        {
          headers: {
            Authorization: `BEARER ${token}`,
          },
        }
      )
      .then((resp) => {
        store.dispatch(addProject(resp.data));
      })
      .catch(() => {
        throw new Error('Une erreur est survenue');
      });
  },
  getById: async (projectId: number) => {
    const url = `${api}/projects/${projectId}?populate=users_artisans&populate=reports`;
    const token = store.getState().token;
    axios
      .get(url, {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      })
      .then((resp) => {
        store.dispatch(setSelectedProject(resp.data));
      });
  },
};

export const artisansService = {
  getByEmail: async (emailArtisan: string) => {
    const url = `${api}/users?filters[$and][0][email][$eq]=${emailArtisan}`;
    const token = store.getState().token;
    const idSelectedProject = store.getState().idSelectedProject;
    await axios
      .get(url, {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      })
      .then(async (resp) => {
        if (resp.data.length > 0) {
          await axios
            .put(
              `${api}/projects/${idSelectedProject}`,
              {
                data: {
                  users_artisans: {
                    id: resp.data[0].id,
                  },
                },
              },
              {
                headers: {
                  Authorization: `BEARER ${token}`,
                },
              }
            )
            .then(() => {
              store.dispatch(addArtisan(resp.data[0]));
            })
            .catch(() => {
              throw new Error('Une erreur est survenue');
            });
        }
      })
      .catch(() => {
        throw new Error('Une erreur est survenue');
      });
  },
};

export const reportsService = {
  getById: async (reportId: number) => {
    const url = `${api}/reports/${reportId}?populate=*`;
    const token = store.getState().token;
    await axios
      .get(url, {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      })
      .then(async (resp) => {
        store.dispatch(setSelectedReport(resp.data));
      })
      .catch(() => {
        throw new Error('Une erreur est survenue');
      });
  },
  create: async (reportInfo: any) => {
    const url = `${api}/reports`;
    const token = store.getState().token;
    await axios
      .post(
        url,
        { data: reportInfo },
        {
          headers: {
            Authorization: `BEARER ${token}`,
          },
        }
      )
      .then((resp) => {
        store.dispatch(addReport(resp.data));
      })
      .catch(() => {
        throw new Error('Une erreur est survenue');
      });
  },
};
