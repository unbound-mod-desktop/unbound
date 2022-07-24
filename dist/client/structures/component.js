"use strict";const a=function(a){return a&&a.__esModule?a:{default:a}}(require("react"));module.exports=class b{constructor(){let b=this.render,c=()=>b.call(this);this.render=()=>a.default.createElement(c)}render(){return null}isMounted(){return!!this._isMounted}forceUpdate(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")}isReactComponent(){return!0}replaceState(a,b){this.updater.enqueueReplaceState(this,b,a)}setState(a,b){if("object"!=typeof a&&"function"!=typeof a&&null!=a)throw"Silly.";this.updater.enqueueSetState(this,a,b,"setState")}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvc3RydWN0dXJlcy9jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgIF9pc01vdW50ZWQ6IGJvb2xlYW47XHJcbiAgIHVwZGF0ZXI6IGFueTtcclxuICAgY29udGV4dDogYW55O1xyXG4gICByZWZzOiBhbnk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXI7XHJcbiAgICAgIGNvbnN0IENvbXBvbmVudENvbnRhaW5lciA9ICgpID0+IHJlbmRlci5jYWxsKHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudENvbnRhaW5lcik7XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgIH1cclxuXHJcbiAgIGlzTW91bnRlZCgpIHtcclxuICAgICAgcmV0dXJuICEhdGhpcy5faXNNb3VudGVkO1xyXG4gICB9XHJcblxyXG4gICBmb3JjZVVwZGF0ZShjYWxsYmFjaykge1xyXG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcclxuICAgfVxyXG5cclxuICAgaXNSZWFjdENvbXBvbmVudCgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHJlcGxhY2VTdGF0ZShzdGF0ZSwgY2FsbGJhY2spIHtcclxuICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVSZXBsYWNlU3RhdGUodGhpcywgY2FsbGJhY2ssIHN0YXRlKTtcclxuICAgfVxyXG5cclxuICAgc2V0U3RhdGUoc3RhdGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBzdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBzdGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgIHRocm93ICdTaWxseS4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XHJcbiAgIH1cclxufTtcclxuXHJcbmV4cG9ydCA9IENvbXBvbmVudDsiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJyZW5kZXIiLCJDb21wb25lbnRDb250YWluZXIiLCJjYWxsIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaXNNb3VudGVkIiwiX2lzTW91bnRlZCIsImZvcmNlVXBkYXRlIiwiY2FsbGJhY2siLCJ1cGRhdGVyIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiaXNSZWFjdENvbXBvbmVudCIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsInNldFN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQSwrRUFBa0IsT0FBTyxrQkFFekIsTUFBTUEsQ0FBUyxDQU1aQyxhQUFjLENBQ1gsSUFBTUMsQ0FBTSxDQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUNwQkMsQ0FBa0IsQ0FBRyxJQUFNRCxDQUFNLENBQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsQUFEdkIsQUFHM0IsQ0FBQSxJQUFJLENBQUNGLE1BQU0sQ0FBRyxJQUFNRyxDQUFLLFFBQUEsQ0FBQ0MsYUFBYSxDQUFDSCxDQUFrQixDQUFDLENBQzdELEFBRURELE1BQU0sRUFBRyxDQUNOLE9BQU8sSUFBSSxBQUFDLENBQ2QsQUFFREssU0FBUyxFQUFHLENBQ1QsTUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDQyxVQUFVLEFBQUMsQ0FDM0IsQUFFREMsV0FBVyxDQUFDQyxDQUFRLENBQUUsQ0FDbkIsSUFBSSxDQUFDQyxPQUFPLENBQUNDLGtCQUFrQixDQUFDLElBQUksQ0FEM0JGLENBQVEsQ0FDK0IsYUFBYSxDQUFDLENBQ2hFLEFBRURHLGdCQUFnQixFQUFHLENBQ2hCLE1BQU8sQ0FBQSxDQUFJLEFBQUMsQ0FDZCxBQUVEQyxZQUFZLENBQUNDLENBQUssQ0FBRUwsQ0FBUSxDQUFFLENBQzNCLElBQUksQ0FBQ0MsT0FBTyxDQUFDSyxtQkFBbUIsQ0FBQyxJQUFJLENBRHBCTixDQUFRLENBQWZLLENBQUssQ0FDd0MsQ0FDekQsQUFFREUsUUFBUSxDQUFDRixDQUFLLENBQUVMLENBQVEsQ0FBRSxDQUN2QixHQUFJLEFBQWlCLFFBQVEsRUFBekIsT0FERUssQ0FBSyxBQUNLLEVBQWlCLEFBQWlCLFVBQVUsRUFBM0IsT0FEM0JBLENBQUssQUFDa0MsQUFBZSxFQUFJQSxBQUFTLElBQUksRUFEdkVBLENBQUssQUFDa0UsQ0FDMUUsS0FBTSxRQUFRLEFBQUMsQUFDakIsQUFFRCxDQUFBLElBQUksQ0FBQ0osT0FBTyxDQUFDTyxlQUFlLENBQUMsSUFBSSxDQUwzQkgsQ0FBSyxDQUFFTCxDQUFRLENBSytCLFVBQVUsQ0FBQyxDQUNqRSxDQUNILEFBRWtCIn0=