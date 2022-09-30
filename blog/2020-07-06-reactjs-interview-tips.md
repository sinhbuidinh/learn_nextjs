---
slug: bi-kip-phong-van-reactjs-thanh-cong
title: Bí kíp cho buổi phỏng vấn ReactJS thành công 🎉
author: Hậu Nguyễn
author_title: Senior Software Engineer at fram^
author_url: https://github.com/paulnguyen-mn
author_image_url: https://avatars3.githubusercontent.com/u/31444102?s=400&u=c545a527aa31843e1361462e410c0f51863e8e26&v=4
image: https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80
tags: [reactjs, phỏng vấn reactjs]
date: '2022-07-06T08:00:00Z'
---

Chắc hẳn nhiều bạn rất hồi hộp, lo lắng khi chuẩn bị cho buổi phỏng vấn ReactJS sắp tới đúng không nào? Hiểu điều đó, mình có viết ra một vài ý, hi vọng bạn nắm được format một buổi phỏng vấn reactjs diễn ra như thế nào và hay hỏi những topic nào, từ đó giúp bạn cảm giác tự tin hơn khi đi phỏng vấn. 🙂

<!-- truncate-->

## Table of contents

![From unplash.com](https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)

**AGENGA:**

1. Một vài lưu ý chung
2. Ôn tập kiến thức JS/ReactJS
3. Cày thuật toán, giải thuật
4. Tìm hiểu về công ty mà mình xin ứng tuyển

> Lưu ý: 
> - Tuỳ mỗi công ty có một style phỏng vấn khác nhau, nên các bạn chỉ tham khảo, đừng mặc định là công ty nào cũng làm giống như bài này chia sẻ nhé 😉 
> - Đây là chia sẻ chung cho tất cả level: từ junior tới senior. Tuỳ level mà các câu hỏi có thể có hay không, hoặc độ khó sẽ khác nhau.

--- 

## Một vài lưu ý chung

Một buổi phỏng vấn thường gồm các phần:

- Làm quen, chào hỏi.
- Tìm hiểu về kinh nghiệm làm việc ở các project trước đây, tập trung vào project gần nhất.
- Giải quyết các tình huống đưa ra:
  - Xử lý tình huống trong công việc.
  - Xử lý bài toán coding về giải thuật.
- Tìm hiểu về mong muốn, nguyện vọng của bạn
- Đặt câu hỏi về công ty, dự án sắp tới sẽ làm nếu bạn được nhận.

--- 

Lưu ý trước và trong buổi phỏng vấn:

- **Ăn mặc:** gọn gàng là được, không cần phải thiệt là đẹp nè. Làm IT ko có nhu cầu đẹp hihi. Đơn giản quần jean, áo thun cũng được òi. Không nhất thiết phải là áo sơ mi mới được nhé. 😉
- **Thời gian:** Nên đến trước giờ hẹn `10-15p`, đừng đến đúng giờ nhé. Vì tới nơi, các bạn có chút thời gian ngồi nghỉ xíu trước khi vào phỏng vấn nè. 😜 Nhưng cũng đừng tới sớm quá đáng, như sớm 30p chẳng hạn thì hơi lố 😅
- **Liên lạc:** Nên xin `số điện thoại` để khi tới nơi không biết gì thì hỏi. Ví dụ như: chỗ để xe, đi tháng máy chỗ nào, lầu mấy, vân vân mây mây. 
- **Thái độ:** giữ cho mình cái mong muốn `sẵn sàng học hỏi, tìm tòi cái mới`, chứ đừng bảo thủ, em biết cái này, em chỉ làm cái này thôi, em không muốn tìm hiểu công nghệ mới thì dễ tạch nè.
- **Thoải mái, tự nhiên:** cái này tuỳ tâm lý từng bạn, không dễ để có được trạng thái này. Cố gắng hít một hơi thât sâu rồi thở ra cho nhẹ người rồi `giữ bình tĩnh`. Tự nhiên nhất có thể nhé. Nếu cần nước cứ lịch sử xin một ly nước (nếu ko có) chứ đừng để khát khô cổ họng rồi không nói nổi nha hehee.
- **Thẳng thắn chia sẻ:** một điều chắc chắn là bạn sẽ `không thể nào biết hết tất cả mọi thứ`, sẽ có những câu bạn không biết trả lời, `cứ thẳng thắn` nói là em chưa biết phần này, em sẽ tìm hiểu thêm ạ. Hoặc là em thấy rất hay và thú vị, nếu có cơ hội được làm việc thì em chắc chắn sẽ nghiên cứu thêm để học hỏi ạ. 😉
- **Hiểu được mong muốn của bản thân:** 
  - Bạn mong muốn được làm gì ở công ty này?
  - Bạn mong muốn được học hỏi công nghệ nào?
  - Bạn dự định tương lai sẽ phát triển theo hướng nào: technical hay management.
  - Bạn có kế hoạch gì cho riêng mình để hoàn thành mục tiêu đó hay không?
Đại loại nếu bạn không biết bạn muốn gì thì làm sao bạn biết bạn có phù hợp với công ty này hay không?

## 1. Ôn tập kiến thức JS/ReactJS

Phần này mục đích là để trả lời phần câu hỏi về kiến thức liên quan tới project gần nhất của bạn. Tuỳ bạn nói bạn biết gì mà sẽ bị hỏi liên quan tới những cái bạn biết hehee 

> TIP: Đừng chém gió phần bạn không biết, kẻo bị hỏi thêm là tạch 😉

### HTML/CSS

- Layout bằng flexbox, grid.
- Hỏi về UI library bạn sử dụng: Bootstrap, Material Design, Ant Design.
- Hỏi về cách bố trí layout.
- Cho một phần giao diện nào đó, hỏi bạn làm thế nào để ra được như vậy (chỉ trình bày, ko code)
- Hỏi về cách tổ chức styles trong project.
- BEM là gì? Apply như thế nào?
- SCSS: có gì vui với ông này, có những tính năng nào mà bạn đã sử dụng.
- Specificity: độ cụ thể trong css
- Làm sao customize được styles của một thư viện UI nào đó.
- Reset CSS vs Normalize CSS 
- ...



### JAVASCRIPT

- "use strict"
- var, const, let khác nhau ra sao?
- Block scope với Function scope
- Hoisting là gì? Cái này có thể bị hỏi dạng cho đoạn code rồi hỏi kết quả và giải thích.
- Closure
- Value type vs reference type 
- Bất đồng bộ trong javascript
- setTimeout(), setInterval()
- Callback
- Promise
- Module trong javascript: import, export, ...
- ES6: arrow function, for...of, async for...of, async/await, ...
- Cho các tình huống xử lý javascript, bạn vận dụng kiến thức để cung cấp giải pháp giải quyết nó.
- ...


### REACTJS

- Component vs PureComponent 
- `Life cycle`: cái nào nên sử dụng cho mục đích nào (cái này mình có share trên kênh Youtube của mình)
- Phân biệt `component state`, `Context API` và `Redux`: khi nào sử dụng cái nào và lý do.
- **Refs trong reactjs**: bạn có dùng nó chưa và dùng cho việc gì? Hoặc ngược lại cho tình huống xài refs để giải quyết xem bạn có biết hay không ?
- Routing thì có phần nested routing, nó là gì và khi nào cần nó.
- Setup routing cho mấy trang cần phải log in như thế nào?
- Form bạn dùng thư viện nào để quản lý: `Formik`, `Redux-Form`, `React-Hook-Form`. Mỗi cái sẽ có những vấn đề riêng có thể hỏi.
- `Auth`: bạn handle phần authentication trong app như thế nào? Token, refresh token, expired token? ( nâng cao )
- `React hooks`: bạn sử dụng hooks nào và cho mục đích gì?
- `Custom hook`: bạn có tự viết một custom hook nào chưa, nếu có thì nó dùng để làm gì ?
- Redux thì giờ có `Redux Toolkit` : nó là gì vậy ta ?
- Quản lý state bên Facebook đang có thư viện mới là `Recoil`: bạn có nghe về nó không? bạn thấy thế nào? 🤣
- Những thư viện bạn hay dùng trong reactjs project.
- ...


## 2. Cày thuật toán, giải thuật

Cái này thì đa dạng lắm nên mình không biết sẽ bị hỏi về vấn đề gì nhen. Nên ôn luyện hết cho chắc 😉 Thường người ra đề sẽ cho một bài toán gì đó, mình tự phân tích và sử dụng thuật toán thích hợp để giải nó.

- Tìm kiếm, sắp xếp đơn giản.
- Tìm chuỗi con dài nhất, ngắn nhất và các biến thể của dạng này.
- Đệ quy.
- Tìm số bí ẩn trong mảng thoả điều kiện gì đó.
- Đồ thị (cái này cũng ít bị hỏi)
- Design pattern (Singleton, Observer, ...)
- Cho đoạn code, hỏi kết quả và giải thích.
- Quy hoạch động (cái này hơi nâng cao òi, chắc ít bị hỏi trừ khi công ty làm về thuật toán)
- ... nói chung cái này tuỳ khả năng logic của các bạn đó 😉

## 3. Tìm hiểu về công ty mà mình xin ứng tuyển

**Tìm hiểu công ty:**

- Công ty làm lĩnh vực gì?
- Size bao nhiêu người? 
- Thành lập khi nào?
- Những dự án công ty đã thực hiện.
- Reviews về công ty.
- ... 


**Hỏi về dự án bạn "sẽ" được nhận vào làm**

- Dự án làm về cái gì?
- Sử dụng công nghệ gì, techstack có những gì trong đó.
- Có bao nhiêu người rồi, và bạn sẽ làm việc với ai?
- Tính của team có vui vẻ, hoà đồng không?
- ... nói chung bạn quan tâm gì về team của bạn sắp làm thì cứ hỏi hen hehee

--- 

Hi vọng bài chia sẻ này hữu ích với mọi người!  
Chúc các bạn có một buổi phỏng vấn thành công tốt đẹp nhé! 🎉  

> From Easy Frontend with ❤️