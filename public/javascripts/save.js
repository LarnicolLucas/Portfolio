<ul class="collection">
      <li v-for="keys in list" :key="keys.id" class="collection-item avatar">
      <img :src="keys.img" class="circle">
      <i v-if="keys.icon_left" :style="'color: '+keys.icon_left.color+';'" class="medium material-icons"> {{ keys.icon_left.value }}</i>
        <span class="title">
        <p>{{ keys.value }}</p>
        </span>
        <a class="secondary-content"><i :style="'color: '+keys.icon_right.color+';'" class="medium material-icons"> {{ keys.icon_right.value }}</i></a>
			</li>
		</ul>