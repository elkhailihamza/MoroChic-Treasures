interface logoProps {
  width?: number | 'auto';
}

function Logo({ width = 100 }: logoProps) {
  return (
    <>
      <svg
        width={width}
        viewBox="0 0 81 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.48722 8.36364H11.169L15.1236 18.0227H15.2599L19.2145 8.36364H20.8963V20H19.5781V11.1591H19.4645L15.8281 20H14.5554L10.919 11.1591H10.8054V20H9.48722V8.36364ZM57.8665 12H56.4574C56.3741 11.5947 56.2282 11.2386 56.0199 10.9318C55.8153 10.625 55.5653 10.3674 55.2699 10.1591C54.9782 9.94697 54.6544 9.78788 54.2983 9.68182C53.9422 9.57576 53.571 9.52273 53.1847 9.52273C52.4801 9.52273 51.8419 9.70076 51.2699 10.0568C50.7017 10.4129 50.2491 10.9375 49.9119 11.6307C49.5786 12.3239 49.4119 13.1742 49.4119 14.1818C49.4119 15.1894 49.5786 16.0398 49.9119 16.733C50.2491 17.4261 50.7017 17.9508 51.2699 18.3068C51.8419 18.6629 52.4801 18.8409 53.1847 18.8409C53.571 18.8409 53.9422 18.7879 54.2983 18.6818C54.6544 18.5758 54.9782 18.4186 55.2699 18.2102C55.5653 17.9981 55.8153 17.7386 56.0199 17.4318C56.2282 17.1212 56.3741 16.7652 56.4574 16.3636H57.8665C57.7604 16.9583 57.5672 17.4905 57.2869 17.9602C57.0066 18.4299 56.6581 18.8295 56.2415 19.1591C55.8248 19.4848 55.357 19.733 54.8381 19.9034C54.3229 20.0739 53.7718 20.1591 53.1847 20.1591C52.1922 20.1591 51.3097 19.9167 50.5369 19.4318C49.7642 18.947 49.1563 18.2576 48.7131 17.3636C48.2699 16.4697 48.0483 15.4091 48.0483 14.1818C48.0483 12.9545 48.2699 11.8939 48.7131 11C49.1563 10.1061 49.7642 9.41667 50.5369 8.93182C51.3097 8.44697 52.1922 8.20455 53.1847 8.20455C53.7718 8.20455 54.3229 8.28977 54.8381 8.46023C55.357 8.63068 55.8248 8.88068 56.2415 9.21023C56.6581 9.53598 57.0066 9.93371 57.2869 10.4034C57.5672 10.8693 57.7604 11.4015 57.8665 12Z"
          fill="#606C38"
        />
        <path
          d="M27.0852 20.1818C26.2973 20.1818 25.6061 19.9943 25.0114 19.6193C24.4205 19.2443 23.9583 18.7197 23.625 18.0455C23.2955 17.3712 23.1307 16.5833 23.1307 15.6818C23.1307 14.7727 23.2955 13.9792 23.625 13.3011C23.9583 12.6231 24.4205 12.0966 25.0114 11.7216C25.6061 11.3466 26.2973 11.1591 27.0852 11.1591C27.8731 11.1591 28.5625 11.3466 29.1534 11.7216C29.7481 12.0966 30.2102 12.6231 30.5398 13.3011C30.8731 13.9792 31.0398 14.7727 31.0398 15.6818C31.0398 16.5833 30.8731 17.3712 30.5398 18.0455C30.2102 18.7197 29.7481 19.2443 29.1534 19.6193C28.5625 19.9943 27.8731 20.1818 27.0852 20.1818ZM27.0852 18.9773C27.6837 18.9773 28.1761 18.8239 28.5625 18.517C28.9489 18.2102 29.2348 17.8068 29.4205 17.3068C29.6061 16.8068 29.6989 16.2652 29.6989 15.6818C29.6989 15.0985 29.6061 14.5549 29.4205 14.0511C29.2348 13.5473 28.9489 13.1402 28.5625 12.8295C28.1761 12.5189 27.6837 12.3636 27.0852 12.3636C26.4867 12.3636 25.9943 12.5189 25.608 12.8295C25.2216 13.1402 24.9356 13.5473 24.75 14.0511C24.5644 14.5549 24.4716 15.0985 24.4716 15.6818C24.4716 16.2652 24.5644 16.8068 24.75 17.3068C24.9356 17.8068 25.2216 18.2102 25.608 18.517C25.9943 18.8239 26.4867 18.9773 27.0852 18.9773ZM33.0866 20V11.2727H34.3821V12.5909H34.473C34.6321 12.1591 34.92 11.8087 35.3366 11.5398C35.7533 11.2708 36.223 11.1364 36.7457 11.1364C36.8442 11.1364 36.9673 11.1383 37.1151 11.142C37.2628 11.1458 37.3745 11.1515 37.4503 11.1591V12.5227C37.4048 12.5114 37.3007 12.4943 37.1378 12.4716C36.9787 12.4451 36.8101 12.4318 36.6321 12.4318C36.2079 12.4318 35.8291 12.5208 35.4957 12.6989C35.1662 12.8731 34.9048 13.1155 34.7116 13.4261C34.5223 13.733 34.4276 14.0833 34.4276 14.4773V20H33.0866ZM42.3196 20.1818C41.5317 20.1818 40.8404 19.9943 40.2457 19.6193C39.6548 19.2443 39.1927 18.7197 38.8594 18.0455C38.5298 17.3712 38.3651 16.5833 38.3651 15.6818C38.3651 14.7727 38.5298 13.9792 38.8594 13.3011C39.1927 12.6231 39.6548 12.0966 40.2457 11.7216C40.8404 11.3466 41.5317 11.1591 42.3196 11.1591C43.1075 11.1591 43.7969 11.3466 44.3878 11.7216C44.9825 12.0966 45.4446 12.6231 45.7741 13.3011C46.1075 13.9792 46.2741 14.7727 46.2741 15.6818C46.2741 16.5833 46.1075 17.3712 45.7741 18.0455C45.4446 18.7197 44.9825 19.2443 44.3878 19.6193C43.7969 19.9943 43.1075 20.1818 42.3196 20.1818ZM42.3196 18.9773C42.9181 18.9773 43.4105 18.8239 43.7969 18.517C44.1832 18.2102 44.4692 17.8068 44.6548 17.3068C44.8404 16.8068 44.9332 16.2652 44.9332 15.6818C44.9332 15.0985 44.8404 14.5549 44.6548 14.0511C44.4692 13.5473 44.1832 13.1402 43.7969 12.8295C43.4105 12.5189 42.9181 12.3636 42.3196 12.3636C41.7211 12.3636 41.2287 12.5189 40.8423 12.8295C40.456 13.1402 40.17 13.5473 39.9844 14.0511C39.7988 14.5549 39.706 15.0985 39.706 15.6818C39.706 16.2652 39.7988 16.8068 39.9844 17.3068C40.17 17.8068 40.456 18.2102 40.8423 18.517C41.2287 18.8239 41.7211 18.9773 42.3196 18.9773ZM61.3026 14.75V20H59.9616V8.36364H61.3026V12.6364H61.4162C61.6207 12.1856 61.9276 11.8277 62.3366 11.5625C62.7495 11.2936 63.2988 11.1591 63.9844 11.1591C64.5791 11.1591 65.0999 11.2784 65.5469 11.517C65.9938 11.7519 66.3404 12.1136 66.5866 12.6023C66.8366 13.0871 66.9616 13.7045 66.9616 14.4545V20H65.6207V14.5455C65.6207 13.8523 65.4408 13.3163 65.081 12.9375C64.7249 12.5549 64.2306 12.3636 63.598 12.3636C63.1586 12.3636 62.7647 12.4564 62.4162 12.642C62.0715 12.8277 61.7988 13.0985 61.598 13.4545C61.401 13.8106 61.3026 14.2424 61.3026 14.75ZM69.4148 20V11.2727H70.7557V20H69.4148ZM70.0966 9.81818C69.8352 9.81818 69.6098 9.72917 69.4205 9.55114C69.2348 9.37311 69.142 9.15909 69.142 8.90909C69.142 8.65909 69.2348 8.44508 69.4205 8.26705C69.6098 8.08902 69.8352 8 70.0966 8C70.358 8 70.5814 8.08902 70.767 8.26705C70.9564 8.44508 71.0511 8.65909 71.0511 8.90909C71.0511 9.15909 70.9564 9.37311 70.767 9.55114C70.5814 9.72917 70.358 9.81818 70.0966 9.81818ZM76.7571 20.1818C75.9389 20.1818 75.2344 19.9886 74.6435 19.6023C74.0526 19.2159 73.598 18.6837 73.2798 18.0057C72.9616 17.3277 72.8026 16.553 72.8026 15.6818C72.8026 14.7955 72.9654 14.0133 73.2912 13.3352C73.6207 12.6534 74.0791 12.1212 74.6662 11.7386C75.2571 11.3523 75.9465 11.1591 76.7344 11.1591C77.348 11.1591 77.901 11.2727 78.3935 11.5C78.8859 11.7273 79.2893 12.0455 79.6037 12.4545C79.9181 12.8636 80.1132 13.3409 80.1889 13.8864H78.848C78.7457 13.4886 78.5185 13.1364 78.1662 12.8295C77.8177 12.5189 77.348 12.3636 76.7571 12.3636C76.2344 12.3636 75.776 12.5 75.3821 12.7727C74.992 13.0417 74.687 13.4223 74.4673 13.9148C74.2514 14.4034 74.1435 14.9773 74.1435 15.6364C74.1435 16.3106 74.2495 16.8977 74.4616 17.3977C74.6776 17.8977 74.9806 18.286 75.3707 18.5625C75.7647 18.839 76.2268 18.9773 76.7571 18.9773C77.1056 18.9773 77.4219 18.9167 77.706 18.7955C77.9901 18.6742 78.2306 18.5 78.4276 18.2727C78.6245 18.0455 78.7647 17.7727 78.848 17.4545H80.1889C80.1132 17.9697 79.9257 18.4337 79.6264 18.8466C79.331 19.2557 78.9389 19.5814 78.4503 19.8239C77.9654 20.0625 77.401 20.1818 76.7571 20.1818Z"
          fill="black"
        />
        <g clipPath="url(#clip0_90_19)">
          <path
            d="M6.58766 5.40292C6.6718 5.1268 6.61091 4.79519 6.40265 4.53259C6.08081 4.12675 5.52794 4.02976 5.16719 4.31585C4.80644 4.60193 4.77494 5.16236 5.09679 5.5682C5.3065 5.83264 5.61405 5.96564 5.90208 5.94661L6.6357 8.79286C6.75221 9.24488 6.44271 9.64587 5.99821 9.61848L3.50544 9.46255C3.48948 9.27479 3.41758 9.08353 3.28651 8.91826C2.96466 8.51242 2.41179 8.41543 2.05105 8.70151C1.6903 8.9876 1.65879 9.54803 1.98064 9.95387C2.30249 10.3597 2.85536 10.4567 3.21611 10.1706C3.21937 10.168 3.22427 10.1641 3.22753 10.1616L7.63471 14.1866C8.16721 14.6737 8.92308 14.7383 9.42911 14.337L13.9539 10.7486C14.4583 10.3486 14.5691 9.59973 14.2163 8.96715L11.3011 3.7589C11.3043 3.75631 11.3092 3.75243 11.3125 3.74984C11.6732 3.46375 11.7047 2.90333 11.3829 2.49749C11.061 2.09165 10.5082 1.99465 10.1474 2.28074C9.78668 2.56683 9.75518 3.12726 10.077 3.53309C10.2081 3.69837 10.3779 3.81195 10.5571 3.87026L10.1411 6.33301C10.0665 6.77206 9.60553 6.98207 9.19194 6.76565L6.58766 5.40292Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_90_19">
            <rect
              width="12"
              height="12"
              fill="white"
              transform="translate(0 7.45639) rotate(-38.4159)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default Logo;