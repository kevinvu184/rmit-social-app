package com.sept.rest.webservices.restfulwebservices.classmate;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

class ClassmateServiceTest {

	private static ClassmateService dataset;
	Classmate mock1 = new Classmate(10004L, "sept", 3678490L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
			"https://www.google.com", "https://picsum.photos/50?random=1");
	Classmate mock2 = new Classmate(10005L, "sept", 3678490L, "Jessica Cruz", "s3571051@student.rmit.edu.au",
			"SEPT, AA, CC", "https://www.google.com", "https://picsum.photos/50?random=2");
	Classmate mock3 = new Classmate(10006L, "sept", 3678490L, "Lauchlan Irwin", "s3561896@student.rmit.edu.au", "SEPT",
			"https://www.google.com", "https://picsum.photos/50?random=3");
	Classmate mock4 = new Classmate(10007L, "sept", 3718342L, "Yuichi Kageyama", "s3718342@student.rmit.edu.au", "SEPT",
			"https://www.google.com", "https://picsum.photos/50?random=4");
	Classmate mock5 = new Classmate(10008L, "sept", 3488631L, "Joshua Wallace", "s3488631@student.rmit.edu.au", "SEPT",
			"https://www.google.com", "https://picsum.photos/50?random=5");

	@BeforeAll
	public static void setup() {
		dataset = new ClassmateService();
	}

	@BeforeEach
	public void init() {
		dataset.save(mock1);
		dataset.save(mock2);
		dataset.save(mock3);
		dataset.save(mock4);
		dataset.save(mock5);
	}

	@AfterEach
	public void cleanup() {
		dataset.deleteById(10004);
		dataset.deleteById(10005);
		dataset.deleteById(10006);
		dataset.deleteById(10007);
		dataset.deleteById(10008);
		dataset.deleteById(10009);
	}

	@Test
	@DisplayName("findById()-positive test-Find at front.")
	public void testFindById1() {
		Classmate mockClassmate = new Classmate(10004L, "sept", 3678490L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
				"https://www.google.com", "https://picsum.photos/50?random=1");
		assertEquals(mockClassmate.getSnumber(), dataset.findById(10004).getSnumber());
	}

	@Test
	@DisplayName("findById()-positive test-Find at back.")
	public void testFindById2() {
		Classmate mockClassmate = new Classmate(10008L, "sept", 3488631L, "Joshua Wallace",
				"s3488631@student.rmit.edu.au", "SEPT", "https://www.google.com", "https://picsum.photos/50?random=5");
		assertEquals(mockClassmate.getSnumber(), dataset.findById(10008).getSnumber());
	}

	@Test
	@DisplayName("findById()-negative test-Find unexist classmate")
	public void testFindById3() {
		assertNull(dataset.findById(10010));
	}

	@Test
	@DisplayName("deleteById()-positive test-Delete at front")
	public void testDeleteById1() {
		assertNotNull(dataset.deleteById(10004));
		assertNull(dataset.findById(10004));
		dataset.findAll().add(new Classmate(10004L, "sept", 3678490L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
				"https://www.google.com", "https://picsum.photos/50?random=1"));
	}

	@Test
	@DisplayName("deleteById()-positive test-Delete at back")
	public void testDeleteById2() {
		assertNotNull(dataset.deleteById(10008));
		assertNull(dataset.findById(10008));
		dataset.findAll().add(new Classmate(10008L, "sept", 3488631L, "Joshua Wallace", "s3488631@student.rmit.edu.au",
				"SEPT", "https://www.google.com", "https://picsum.photos/50?random=5"));
	}

	@Test
	@DisplayName("deleteById()-negative test-Delete unexist classmate")
	public void testDeleteById3() {
		assertNull(dataset.deleteById(10010));
	}

	@Test
	@DisplayName("deleteById()-positive test-Delete all data")
	public void testDeleteById() {
		assertNotNull(dataset.deleteById(10004));
		assertNotNull(dataset.deleteById(10005));
		assertNotNull(dataset.deleteById(10006));
		assertNotNull(dataset.deleteById(10007));
		assertNotNull(dataset.deleteById(10008));
		assertTrue(dataset.findAll().isEmpty());
	}

	@Test
	@DisplayName("save()-positive test-Save new data")
	public void testSave1() {
		dataset.save(new Classmate(10009L, "sept", 3678491L, "Ted Vu", "s3678491", "SEF, WP, AA", "", ""));
		Classmate mockClassmate = new Classmate(10011L, "sept", 3678491L, "Ted Vu", "s3678491", "SEF, WP, AA", "", "");
		assertEquals(mockClassmate.getSnumber(), dataset.findById(10009).getSnumber());
	}
	
	@Test
	@DisplayName("save()-positive test-Update data")
	public void testSave2() {
		dataset.save(new Classmate(10004L, "sept", 3678491L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
				"https://www.google.com", "https://picsum.photos/50?random=1"));
		assertEquals(3678491L, dataset.findById(10004).getSnumber().longValue());
	}
	
	@Test
	@DisplayName("save()-positive test-Update multiple times")
	public void testSave3() {
		dataset.save(new Classmate(10004L, "sept", 3678491L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
				"https://www.google.com", "https://picsum.photos/50?random=1"));
		dataset.save(new Classmate(10004L, "sept", 3678492L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
				"https://www.google.com", "https://picsum.photos/50?random=1"));
		assertEquals(3678492L, dataset.findById(10004).getSnumber().longValue());
	}
	
	@Test
	@DisplayName("save()-negative test-Update new data")
	public void testSave4() {
		dataset.save(new Classmate(10004L, "sept", 3678491L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
				"https://www.google.com", "https://picsum.photos/50?random=1"));
		assertNotEquals(3678490L, dataset.findById(10004).getSnumber().longValue());
	}
	
	@Test
	@DisplayName("save()-negative test-Update same data")
	public void testSave5() {
		dataset.save(new Classmate(10004L, "sept", 3678490L, "Kevin Vu", "s3678490@rmit.edu.vn", "SEPT",
				"https://www.google.com", "https://picsum.photos/50?random=1"));
		assertEquals(3678490L, dataset.findById(10004).getSnumber().longValue());
	}
}
