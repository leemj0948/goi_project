export default function Step() {
  return (
    <div>
      <div>
        <div>1/2</div>
        <div>견적 요청서</div>
        <div>
          <p>장례 준비가 긴급한 상황일까요?</p>

          <label>
            <input type="redio" name="chk_info" value="1" />
            급하지 않지만 미리 알아보려고 해요.
          </label>
          <label>
            <input type="redio" name="chk_info" value="2" />
            1달 정도 기간이 남은 것 같아요.
          </label>
          <label>
            <input type="redio" name="chk_info" value="3" />
            임종이 얼마 남지 않았어요.
          </label>
        </div>
      </div>
      <div>다음</div>
    </div>
  );
}
