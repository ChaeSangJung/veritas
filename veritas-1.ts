// 액션 캑체들의 타입 x
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>

// state 타입
type CounterState = {
    count : number;
}

interface Place {
  name: string;
  addr: string;
}
interface PlacesProps {
  placeList: Place[];
}

interface IImg {
    id: string;
    urls : {
        regular:string;
    };
    alt_description: string;
}

interface IImgProps {
    loading:boolean;
    data : IImg[];
    error:string;
    keyword:string;
    totalPages:number;    
}

// 초기 상태 선언
const initialState : IImgProps = {
    loading: true,
    data: [],
    error: "",
    keyword: "",
    totalPages : 0
}