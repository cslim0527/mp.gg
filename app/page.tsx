import React from "react";

export default function Page() {
  return (
    <div>
      <h1>MP.GG</h1>

      <hr />
      <div>https://developers.nexon.com/Maplestory/api/15/47</div>
      <hr />

      <section>
        <h2>기능 리스트</h2>
        <ol>
          <li>회원관리 (login/logout)</li>
          <li>Chat GPT를 이용한 프로필 이미지 생성 기능</li>
          <li>
            파티 모집 기능
            <ul>
              <li>참여인원: 10명</li>
              <li>사냥터: 카루타 (카오스 루타비스), 군단장</li>
              <li>옵션: 초대자, 비숍자리, 월, 일, 요일, 시간, HP 제한</li>
              <li>어떤 코스로 진행되는지 레이드 코스 명시도 하는듯</li>
              <li>노말, 하드, 카오스 난이도별 설정이 필요할듯</li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
}
