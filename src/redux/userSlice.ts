import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  token: string;
  userInfo: {};
  idSelectedProject: number;
  selectedProject: {};
  artisansProject: any[];
  reportsProject: any[];
  selectedReport: {};
  projects: any[];
} = {
  token: '',
  userInfo: {},
  idSelectedProject: 0,
  selectedProject: {},
  artisansProject: [],
  reportsProject: [],
  selectedReport: {},
  projects: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.jwt;
      state.userInfo = action.payload.user;
    },
    logout: (state) => {
      state.token = '';
      state.userInfo = {};
      state.idSelectedProject = 0;
      state.selectedProject = {};
      state.artisansProject = [];
      state.reportsProject = [];
      state.projects = [];
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setSelectedProject: (state, action) => {
      const dataProject = {
        id: action.payload.data.id,
        name: action.payload.data.attributes.name,
        location: action.payload.data.attributes.location,
        start_date: action.payload.data.attributes.start_date,
        landArea: action.payload.data.attributes.landArea,
        houseArea: action.payload.data.attributes.houseArea,
      };
      state.idSelectedProject = action.payload.data.id;
      state.selectedProject = dataProject;

      const artisansProject =
        action.payload.data.attributes.users_artisans.data;
      state.artisansProject = [];
      artisansProject.forEach((artisan: any) => {
        const artisanProject = {
          id: artisan.id,
          firstName: artisan.attributes.firstName,
          lastName: artisan.attributes.lastName,
          email: artisan.attributes.email,
          tel: artisan.attributes.tel,
          job: artisan.attributes.job,
        };
        state.artisansProject = [...state.artisansProject, artisanProject];
      });

      const reportsProject = action.payload.data.attributes.reports.data;
      state.reportsProject = [];
      reportsProject.forEach((report: any) => {
        const reportProject = {
          id: report.id,
          name: report.attributes.name,
          description: report.attributes.description,
          start_date: report.attributes.start_date,
          report_type: report.attributes.report_type,
          step: report.attributes.step,
          createdAt: report.attributes.createdAt,
        };
        state.reportsProject = [...state.reportsProject, reportProject];
      });
    },
    addProject: (state, action) => {
      const dataProject = {
        id: action.payload.data.id,
        name: action.payload.data.attributes.name,
        location: action.payload.data.attributes.location,
        start_date: action.payload.data.attributes.start_date,
        landArea: action.payload.data.attributes.landArea,
        houseArea: action.payload.data.attributes.houseArea,
      };
      state.projects = [...state.projects, dataProject];
    },
    addArtisan: (state, action) => {
      state.artisansProject = [...state.artisansProject, action.payload];
    },
    setSelectedReport: (state, action) => {
      state.selectedReport = {
        ...action.payload.data.id,
        ...action.payload.data.attributes,
      };
    },
    addReport: (state, action) => {
      const dataReport = {
        id: action.payload.data.id,
        ...action.payload.data.attributes,
      };
      state.reportsProject = [dataReport, ...state.reportsProject];
    },
  },
});

export const {
  login,
  logout,
  setProjects,
  setSelectedProject,
  addProject,
  addArtisan,
  setSelectedReport,
  addReport,
} = userSlice.actions;

export default userSlice.reducer;
