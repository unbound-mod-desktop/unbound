"use strict";module.exports=function(a={},b=a=>a,{ignore:c=[],walkable:d=[],maxProperties:e=100}={}){let f=[a];for(;f.length&&e;){let g=f.shift();if(function(...a){try{return Reflect.apply(b,this,a)}catch{return!1}}(g))return g;if(Array.isArray(g))f.push(...g);else if("object"==typeof g&&null!==g){if(d.length)for(let h in g){let i=g[h];~d.indexOf(h)&&!~c.indexOf(h)&&f.push(i)}else for(let j in g){let k=g[j];g&& ~c.indexOf(j)||f.push(k)}}e--}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2ZpbmRJblRyZWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBmaW5kSW5UcmVlT3B0aW9ucyB7XHJcbiAgaWdub3JlPzogc3RyaW5nW107XHJcbiAgd2Fsa2FibGU/OiBzdHJpbmdbXTtcclxuICBtYXhQcm9wZXJ0aWVzPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgZmluZEluVHJlZVxyXG4gKiBAZGVzY3JpcHRpb24gU2VhcmNoZXMgdGhyb3VnaCB0aGUgd2Fsa2FibGVzIHByb3ZpZGVkIGluc2lkZSBhIHRyZWUuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB0cmVlIC0gVGhlIHRyZWUgdG8gc2VhcmNoXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZpbHRlciAtIFRoZSBmaWx0ZXIgdG8gdXNlIHRvIHJlc29sdmUgdGhlIHNlYXJjaFxyXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciB0aGUgc2VhcmNoXHJcbiAqIEBwYXJhbSB7YXJyYXl9IFtvcHRpb25zLmlnbm9yZT1bXV0gLSBUaGUga2V5cyB0byBpZ25vcmUgaW4gdGhlIHNlYXJjaFxyXG4gKiBAcGFyYW0ge2FycmF5fSBbb3B0aW9ucy53YWxrYWJsZT1bXV0gLSBUaGUga2V5cyB0byB3YWxrL3RyYXZlcnNlIGluIHRoZSBzZWFyY2hcclxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFByb3BlcnRpZXM9MTAwXSAtIFRoZSBrZXlzIHRvIHdhbGsvdHJhdmVyc2UgaW4gdGhlIHNlYXJjaFxyXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gd2l0aCBhIGNhY2hlYWJsZSB2YWx1ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGZpbmRJblRyZWUodHJlZTogUmVjb3JkPGFueSwgYW55PiB8IGFueVtdID0ge30sIGZpbHRlcjogKC4uLmFyZ3M6IGFueSkgPT4gYm9vbGVhbiA9IF8gPT4gXywgeyBpZ25vcmUgPSBbXSwgd2Fsa2FibGUgPSBbXSwgbWF4UHJvcGVydGllcyA9IDEwMCB9OiBmaW5kSW5UcmVlT3B0aW9ucyA9IHt9KTogYW55IHtcclxuICBjb25zdCBzdGFjayA9IFt0cmVlXTtcclxuICBjb25zdCB3cmFwRmlsdGVyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KGZpbHRlciwgdGhpcywgYXJncyk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHdoaWxlIChzdGFjay5sZW5ndGggJiYgbWF4UHJvcGVydGllcykge1xyXG4gICAgY29uc3Qgbm9kZSA9IHN0YWNrLnNoaWZ0KCk7XHJcbiAgICBpZiAod3JhcEZpbHRlcihub2RlKSkgcmV0dXJuIG5vZGU7XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcclxuICAgICAgc3RhY2sucHVzaCguLi5ub2RlKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUgPT09ICdvYmplY3QnICYmIG5vZGUgIT09IG51bGwpIHtcclxuICAgICAgaWYgKHdhbGthYmxlLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5vZGUpIHtcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZVtrZXldO1xyXG4gICAgICAgICAgaWYgKH53YWxrYWJsZS5pbmRleE9mKGtleSkgJiYgIX5pZ25vcmUuaW5kZXhPZihrZXkpKSB7XHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBub2RlKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGVba2V5XTtcclxuICAgICAgICAgIGlmIChub2RlICYmIH5pZ25vcmUuaW5kZXhPZihrZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICBzdGFjay5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1heFByb3BlcnRpZXMtLTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmV4cG9ydCA9IGZpbmRJblRyZWU7Il0sIm5hbWVzIjpbInRyZWUiLCJmaWx0ZXIiLCJfIiwiaWdub3JlIiwid2Fsa2FibGUiLCJtYXhQcm9wZXJ0aWVzIiwic3RhY2siLCJsZW5ndGgiLCJub2RlIiwic2hpZnQiLCJ3cmFwRmlsdGVyIiwiYXJncyIsIlJlZmxlY3QiLCJhcHBseSIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giLCJrZXkiLCJ2YWx1ZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBLDRCQWtCQSxTQUFvQkEsQ0FBOEIsQ0FBRyxFQUFFLENBQUVDLENBQWlDLENBQUdDLENBQUMsRUFBREEsQ0FBQyxBQUFLLENBQUUsQ0FBRUMsTUFBTSxDQUFOQSxDQUFNLENBQUcsRUFBRSxDQUFFQyxRQUFRLENBQVJBLENBQVEsQ0FBRyxFQUFFLENBQUVDLGFBQWEsQ0FBYkEsQ0FBYSxDQUFHLEdBQUcsQ0FBcUIsQ0FBRyxFQUFFLENBQU8sQ0FDckwsSUFBTUMsQ0FBSyxDQUFHLENBRElOLENBQThCLENBQzVCLEFBQUMsQUFTckIsTUFBT00sQ0FBSyxDQUFDQyxNQUFNLEVBQUlGLENBQWEsRUFBRSxDQUNwQyxJQUFNRyxDQUFJLENBQUdGLENBQUssQ0FBQ0csS0FBSyxFQUFFLEFBQUMsQUFDM0IsSUFBSUMsQUFWYSxTQUFVLEdBQUdDLENBQUksQ0FBRSxDQUNwQyxHQUFJLENBQ0YsT0FBT0MsT0FBTyxDQUFDQyxLQUFLLENBQUNaLENBQU0sQ0FBRSxJQUFJLENBQUVVLENBQUksQ0FBQyxBQUFDLENBQzFDLEFBQUMsS0FBTSxDQUNOLE1BQU8sQ0FBQSxDQUFLLEFBQUMsQ0FDZCxDQUNGLENBSWdCSCxDQUFJLENBQUMsQ0FBRSxPQUFPQSxDQUFJLEFBQUMsQUFFbEMsSUFBSU0sS0FBSyxDQUFDQyxPQUFPLENBQUNQLENBQUksQ0FBQyxDQUNyQkYsQ0FBSyxDQUFDVSxJQUFJLElBQUlSLENBQUksQ0FBQyxNQUNkLEdBQUksQUFBZ0IsUUFBUSxFQUF4QixPQUFPQSxDQUFJLEVBQWlCQSxBQUFTLElBQUksR0FBYkEsQ0FBSSxBQUFTLEVBQ2xELEdBQUlKLENBQVEsQ0FBQ0csTUFBTSxDQUNqQixJQUFLLElBQU1VLENBQUcsSUFBSVQsQ0FBSSxDQUFFLENBQ3RCLElBQU1VLENBQUssQ0FBR1YsQ0FBSSxDQUFDUyxDQUFHLENBQUMsQUFBQyxBQUNwQixFQUFDYixDQUFRLENBQUNlLE9BQU8sQ0FBQ0YsQ0FBRyxDQUFDLEVBQUksQ0FBQyxDQUFDZCxDQUFNLENBQUNnQixPQUFPLENBQUNGLENBQUcsQ0FBQyxFQUNqRFgsQ0FBSyxDQUFDVSxJQUFJLENBQUNFLENBQUssQ0FBQyxDQUVwQixLQUVELElBQUssSUFBTUQsQ0FBRyxJQUFJVCxDQUFJLENBQUUsQ0FDdEIsSUFBTVUsQ0FBSyxDQUFHVixDQUFJLENBQUNTLENBQUcsQ0FBQyxBQUFDLENBQ3BCVCxDQUFJLEdBQUksQ0FBQ0wsQ0FBTSxDQUFDZ0IsT0FBTyxDQUFDRixDQUFHLENBQUMsRUFFaENYLENBQUssQ0FBQ1UsSUFBSSxDQUFDRSxDQUFLLENBQUMsQ0FDbEIsQUFDRixDQUNGLEFBQ0RiLENBQWEsRUFBRSxDQUNoQixDQUNGLEFBR21CIn0=