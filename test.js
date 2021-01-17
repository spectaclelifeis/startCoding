// 음료는 아메리카노, 라떼, 오렌지 주스가 있습니다, 각 음료는 id가 잇고 그 id 로 재고가 있습니다
// 음료 정보에는 음료 이름, 가격, 커피/논커피, 제조시간이 있습니다.
// 오늘 뽑을 수 있는 커피의 수는 정해져 있습니다.
const menus = [
    {
      id: 101,
      name: "아메리카노",
      price: "3000",
      type: "coffee",
      makingTime: 40,
    },
    {
        id:102,
        name: "라떼",
        price: "4000",
        type: "latte",
        maikingTime: 50,
    },
    {
        id:103,
        name: "오렌지 주스",
        price: "2000",
        type: "juice",
        maikingTime: 30,
    }  ];
  // 재고
  const ingredients = {
    101: 10,
    102: 30,
    103: 30,
  };
  // 음료 주문을 받습니다.
  // 1. 주문 받은 음료가 무엇인지 확인합니다.
  // 2. 주문받은 음료 외에 주문이 들어온 경우 또는 재고가 부족한 경우에는 주문이 불가능함을 알려줍니다.
  // 3. 주문받은 음료의 총 갯수를  보여줍니다.
  // 4. 지금까지 번 돈의 총 계를 보여줍니다.
  document.getElementById("getorder").addEventListener("click", orderMenu);
  // initialize
  getTotal();
  getTotalPrice();
  let orderList = "";
  function orderMenu(e) {
    console.log("주문하기");
    const order = document.getElementById("order").value; // 이게 주문받은 주문 정보
    orderList += `<span>${order}</order> </br/>`;
    document.querySelector(".orderlist").innerHTML = orderList;
    
    // 여기에 코드를 작성하세요!
    // 주문이 끝나면 오늘 번 돈을 추가합니다
    // 주문이 끝나면 오늘 총 주문 수에 추가합니다
  }
  function getTotalPrice(price) {
    let totalAmount = 0;
    // 여기에 코드를 작성하세요!
    document.querySelector(".totalprice").innerHTML = totalAmount + " 원";
  }
  function getTotal(orderCount) {
    let totalAmount = 0;
    // 여기에 코드를 작성하세요!
    document.querySelector(".total").innerHTML = totalAmount + " 잔";
  }

  console.log("test!");
  